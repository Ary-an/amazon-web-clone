# Amazon Web Clone Fronte


## Opening/Serving the Frontend locally:

1. **NodeJS:** <br>
   Please install [NodeJS >= 10.15.0](https://nodejs.org/en/download/). Which automatically installs NPM. If you already have them, you're good to go. ✔

1. **Amazon Backend:** <br>
   Please clone the [Amazon Backend Repository](https://github.com/Ary-an/amazon-payment-backend)


Once you have the [Prerequisites](#prerequisites) covered:
1. Clone this repository from GitHab onto your local computer.

    ```sh
    $ git clone https://github.com/Ary-an/amazon-web-clone.git
    ```
    
1. Navigate into the project folder and install all of its necessary dependencies with npm.

    ```sh
    $ cd amazon-web-clone
    $ npm install
    ```

1. Create `.env` file and added following credentials
    ```sh
    REACT_APP_STRIPE_PAYMENT_KEY = (Your stripe Publishable key)
    REACT_APP_BACKEND_PATH = (The address of backend running)
    ```

1. Once that's done, You are ready to start server locally 😃 <br>
   Now you can run -

   ```sh
   $ npm start
   ```
   
   to start the local development server.
