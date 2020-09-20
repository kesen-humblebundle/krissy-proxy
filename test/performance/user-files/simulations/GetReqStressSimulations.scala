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

class GetReqStressSimulation extends Simulation {

  val csvProductIdsFeeder = csv("productsIds.csv").random // => if I want to use csv instead of random generator function

  val httpConf = http
    .baseURL("http://localhost:1000") // Here is the root for all relative URLs

  val getScenario = scenario("Get") // A scenario is a chain of requests and pauses
    .feed(csvProductIdsFeeder)
    .exec(http("Get") // Here's an example of a Get request
    .get("/${product_id}")
  )
  
  /* Stress Test */
  setUp(
    getScenario.inject(
      nothingFor(5 seconds),
      atOnceUsers(700),
      rampUsers(100) over(10 seconds)
      )
    )
    .protocols(httpConf)
}