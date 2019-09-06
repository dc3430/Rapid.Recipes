# PROJECT 2 Code Review: Dan Cermak

Technical Requirements         | Yes | No |
:--                            |:--  |:-- |
Has at least two models        |  x   |    |
A resource can be "Created"  |  x   |    |
A resource can be "Updated"  |  x   |    |
A resource can be "Deleted"  |  x   |    |
Users can sign in using an OAuth provider  |  x   |    |
Authorization middleware used to restrict functionality as applicable |     |  x  |
Is deployed to Heroku          |  x   |    |
OPTIONAL - The app consumes a third-party API |     |  x  |
OPTIONAL - A data resource is accessible on the server via an API (returns JSON)   |     |  x  |

#### Feedback:  _____________________________________________________<br>__________________________________________________________________<br>_______________________________________________________________

GitHub / Readme                                 | Yes | No |
:--                                    |:--  |:-- |
Description of application |     |  x  |
Link to deployed app | x |  |
Unsolved problems                      |     |  x  |
Link to Heroku                         |  x   |    |
Link to Trello                         |    |  x  |
OPTIONAL - The app's exposed API endpoints (routing) are documented   |     |  x  |
Frequent commits      |  x   |    |

Trello                                 | Yes | No |
:--                                    | :-- |:-- |
Wireframes                             |     |  x  |
User Stories tracked in lists  |  x   |    |
User Stories written using correct format "Role - Goal - Reason"  |     |  x  |

Application's Pages                           | Yes |  No |
:-- | :-- | :-- |
Application has logical and functional navigation |x | |
The application's pages have padding (don't touch the window) |x | |
The labels and inputs in forms are not "jagged" | |x |

HTML & views                       | Yes |  No |
:-- | :-- | :-- |
HTML is properly indented                     |  x   |     |
HTML is free of commented out or "dead code"  |  x   |     |
OPTIONAL - HTML inputs use validation (i.e. `pattern` attribute w/RegExp) as needed                 |     |  x   |


JavaScript                    | Yes |  No |
:-- | :-- | :-- |
Properly indented                   |  x   |     |
Free of commented out or "dead code"  |  x   |     |
Array iterator methods used instead of `for` loops |x | |
Arrow functions used for array iterator callbacks | |x |

MongooseJS Models                    | Yes |  No |
:-- | :-- | :-- |
Validations (including `enums`) used as needed  |     |  x   |
Default values used as needed  |    |  x  |
Bonus: Virtual properties used  |     |  x   |
Bonus: Instance and/or static methods used |x | |
Bonus: MongooseJS middleware hooks (pre/post save, etc) used | | x |


Additional Comments, Suggestions, Feedback:

#### Feedback:  

Great job on completing this project. I know you have a lot going on, so I'm glad you were able to produce something that met the minimum requirements. I won't be too hard on you but here is some feedback:

In regards to design, I do recommend building with accessibility in mind (black text, and red background is a huge no-no). I might have some supplemental resources for you on the topic. I do suggest using a CSS framework, even if the application of such is minimal during the primary development phase to give it some nice structure, then come back and flush it out with your custom CSS (I suggest bulma because it has built in accessibility, so it will change text to match the colors of your app). Having an eye for some design principals, no matter how small, will make your applications that much more memorable. Check out <code>material.io</code> for more on the topic.

As we've also discussed planning this stuff out will make it much more easy to develop. I was suggest taking the extra hour or two just to make sure you have a solid game plan. There is a bug in the system: if someone doesn't add ingredients, they cant edit the recipe, or ingredients after. I do like how you did that though -  creating a recipe, then automatically going to the ingredients page. that is a much better way to handle forms, especially longer ones. Finally be sure to review what you missed and didn't miss from the rubric. You definitley need to use your trello board more. From your past experience I expected a lot more there.
