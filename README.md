# Grocery Store Price Calculator


## Description

* You have been hired by a grocery store to write a program that will determine the price of a customer's purchase.
* The store has the following pricing rules:
  * Apples are $0.50 each
  * Oranges are $0.30 each
  * Bananas are $0.20 each
  * All other fruits are $0.10 each
* In addition to the per-item price, there is a tax of 6% on all purchases.

* Your task is to write a `PriceCalculator` class with a `calculateTotalPrice(items: string[]) -> number` method that takes in an array of strings representing the items in a customer's cart and returns the total price of the purchase, including tax.

### Example

```js
const calculator = new PriceCalculator();
console.log(calculator.calculateTotalPrice(["apple", "orange", "banana"])); // 1.06
console.log(calculator.calculateTotalPrice(["apple", "apple", "apple", "apple"])); // 2.04
console.log(calculator.calculateTotalPrice(["apple", "orange", "banana", "mango"])); // 1.46
```

### Constraints
* The input array will always contain at least one item.
* The input array will only contain lowercase strings.
* **Hints**
  * Use a switch statement to determine the price of each item.
  * Use a for loop to iterate over the items in the array and calculate the total price.
  * Remember to add the tax to the total price.




## How to Download

#### Part 1 - Forking the Project
* To _fork_ the project, click the `Fork` button located at the top right of the project.


#### Part 2 - Navigating to _forked_ Repository
* Navigate to your github profile to find the _newly forked repository_.
* Copy the URL of the project to the clipboard.

#### Part 3 - Cloning _forked_ repository
* Clone the repository from **your account** into the `~/dev` directory.
  * if you do not have a `~/dev` directory, make one by executing the following command:
    * `mkdir ~/dev`
  * navigate to the `~/dev` directory by executing the following command:
    * `cd ~/dev`
  * clone the project by executing the following command:
    * `git clone https://github.com/MYUSERNAME/NAMEOFPROJECT`

#### Part 4 - Check Build
* Ensure that the tests run upon opening the project.
    * You should see `Tests Failed: 99 of 99 tests`







## How to Submit

#### Part 1 -  _Pushing_ local changes to remote repository
* from a _terminal_ navigate to the root directory of the _cloned_ project.
* from the root directory of the project, execute the following commands:
    * add all changes
      * `git add .`
    * commit changes to be pushed
      * `git commit -m 'I have added changes'`
    * push changes to your repository
      * `git push -u origin master`

#### Part 2 - Submitting assignment
* from the browser, navigate to the _forked_ project from **your** github account.
* click the `Pull Requests` tab.
* select `New Pull Request`
