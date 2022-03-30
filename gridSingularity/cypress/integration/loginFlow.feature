Feature: Login Flow
I want to login on website

Scenario: Login Flow Check

Given I open webpage for gridsingularity
And I click on next and lets go button
And I click on Login Button
# And I enter blank email and password
# And I enter Invalid email format 'test' and password as ' '
# And I enter Invalid email format 'test@' and password as ' '
# And I enter Invalid email format 'test@gmail' and password as ' '
# And I enter Incorrect email 'omar.baz@gmail.com' and password as ' '
# And I enter correct email 'omar.bazz99@gmail.com' and password as ' '
# And I enter correct email 'omar.bazz99@gmail.com' and 1 digit password password '1'
# And I enter correct email 'omar.bazz99@gmail.com' and 8 digit password password '12345678'
# And I enter correct email 'omar.bazz99@gmail.com' and Incorrect password password '10122'
And I enter correct email 'omar.bazz99@gmail.com' and correct password '1012218218@$'
When I login to the portal
Then I do verification on dashboard page that user logged in or not