
# VeloCar
## Definition
**VeloCar** is a car buying web application. It allows users to view and buy different types of vehicles. The user can also create a membership which makes the usage of the web page easier. The application consists of signing up and signing in, viewing the cars, selecting and visualize selected cars features and buying the cars. It also allows different types of payment methods.

## Usage Scenarios
* Main Page: This is the page where the application starts. At the top of the screen, there are **a brand name** and **signing in**, **signing up**, and **faq** buttons. Additionally, the user can see different types of vehicles at the middle of the screen.

![Main Screen.png](https://www.dropbox.com/scl/fi/rwwa7oxn44xmv58mhvvwc/Main-Screen.png?rlkey=9j8oybxk3sibl29beo6ftwoui&dl=0&raw=1)

 |Button                         |Purpose					|
|-------------------------------|-----------------------------|
|`Sign In			`            |It allow users to sign in to their account.|
|`Sign Up						`|It allow users to sign up to the system.
|`FAQ						`|It allow users to see frequently asked questions.

*  When the all cars are listed in the screen, they should choose a car to buy. When they selected the car that they want, a screen that shows features of the car appear from the local storage. At that screen, the user can easily switch to the payment screen by clicking **"Buy Now"** button. 
![Car View.jpeg](https://www.dropbox.com/scl/fi/ucdde6r5u7zfaunwa3ovy/Car-View.jpeg?rlkey=9ak6xgipb0hbibsa2q9ry74xf&dl=0&raw=1)

* At the payment screen, there are various payment methods that user can buy with. After they made the payment succesfully, the car is theirs!
![Payment Page.jpeg](https://www.dropbox.com/scl/fi/gfvanrhe3c8s602a61ydz/Payment-Page.jpeg?rlkey=zz5kngaqt2u2iahdvtqrfsdzp&dl=0&raw=1)

* **Sing In**: If someone created a membership in this application, they can easily sign in to their account with their e-mail address and password. If someone tries to sign in to an account which is not signed up, it gives an error.![Login.jpeg](https://www.dropbox.com/scl/fi/o1z7qqqxqbmaxwn5oeweb/Login.jpeg?rlkey=yzj79cher2jwm0hfz95y4pmwk&dl=0&raw=1)

* **Sing Up**: Everyone can be a member of the application by clicking this button! It just needs the users name, surname, e-mail address and password. The system creates an account for these informations and stores it. If the informations do not meet the requirements than the account will not be created.![SignUp.png](https://www.dropbox.com/scl/fi/mi81dg4wtcv5d8wx3qlb7/SignUp.png?rlkey=jc1kre5hknqrwexdhwt56i9jf&dl=0&raw=1)

* **FAQ**: All questions that are asked before and keep being asked are here. The users can easily click and see all the solutions to the problems they have. An additional feature here is that users can subscribe to the website for additional sales and informations.![FAQ page.png](https://www.dropbox.com/scl/fi/wrziazgzcx885rhjl4thi/FAQ-page.png?rlkey=w6m5is46r1wtsyts1itwqq9ae&dl=0&raw=1)

## Flow Diagram

```mermaid
graph LR
	A[Start] ----> B[Buy Car]
	B -- Choose a car --> F[Payment]
	F -- If payment successfull --> G[Successfull]
	A[Start] ----> C[Sign In]
	C -- Correct login informations --> Successful-Login
	C -- False information --> C
	A[Start] ----> D[Sign Up]
	D -- Able to satisfy conditions --> Successful-Sign-Up
	D -- Cannot satisfy --> D
	A[Start] --> E[FAQ] --> H[Subscribe with email and name]
```
## Project Members and Responsibilities

 - **Eren Darak**: Link and transition between main page and car view page, car view page and its functionalities which are provided from local storage, faq page and its functionalities which holds subscribers in local storage, markdown document
 - **Ali İlan**: Main page, its functionalities and its layouts, sign in page and its functionalities which allow users to sign in and delete account
 - **Ahmet Berkay Arslanpençe**: Sign up page and its functionalities which holds users in local storage, payment page and its functionalities which holds 
payment information in local storage

## Instructions

By running the project on your ide, you can start the program. Just be careful, it should start from the main page.
