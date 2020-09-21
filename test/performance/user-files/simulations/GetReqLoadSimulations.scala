/**
 * Copyright 2011-2017 GatlingCorp (http://gatling.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package priceAndPromotion

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._
import scala.util.Random

class GetReqLoadSimulation extends Simulation {

  val csvProductIdsFeeder = csv("productsIds.csv").random // => if I want to use csv instead of random generator function

  val httpConf = http
    .baseURL("http://localhost:1000") // Here is the root for all relative URLs

  val getScenario = scenario("Get") // A scenario is a chain of requests and pauses
    .feed(csvProductIdsFeeder)
    .exec(http("Get") // Here's an example of a Get request
    .get("/${product_id}")
  )
  
  /* Load Test */
  setUp(
    getScenario.inject(
      nothingFor(4 seconds), // pause 
      atOnceUsers(100), // inject users at once
      rampUsers(50) over(5 seconds), // ramp up users injection
      constantUsersPerSec(50) during(15 seconds), // inject users at constate rate
      constantUsersPerSec(50) during(15 seconds) randomized, // inject users at constate rate at random intervals
      rampUsersPerSec(20) to 20 during(10 minutes), // inject users from starting rate to target rate
      rampUsersPerSec(20) to 20 during(10 minutes) randomized, // inject users from starting rate to target rate at random intervals
      heavisideUsers(10000) over(20 seconds) // inject users (peak period) for a duration
      ).protocols(httpConf)
  )

}