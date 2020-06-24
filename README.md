<b>Before running locally</b>:
1. Visit https://api.data.gov/signup and sign up for an API key.

2. In the root of project folder, create a <i>.env</i> file

3. In the newly created .env file, include the line below, adding your own API key:<br><br>
<i>process.env.DATA_GOV_API_KEY = <b>your_api_key_here</b></i>

4. Save and follow steps below to run locally


<b>To run locally</b>:
1. In terminal, run <i>npm install</i> to install necessary dependencies

2. Run <i>npm start</i>

3. Navigate to http://localhost:3000/

<b>About the project</b>:
This single page application is pretty self explanatory. It displays academic program, race and ethnic demographic, and gender data for the University of Wisconsin-Madison.
<br>
Data for academic programs and race and ethnic demographics are displayed as donut pie charts. Each segment represents a percentage. Hover over smaller slices to see data related to it.
<br>
A gender breakdown can be found on the bottom of the page and shows the percentage of men vs. women enrolled year after year.
<br>
Each data visual comes with the option to download the data to csv format.

<b>Tools Used</b>:
This application was primarily built with Javascript and React. Nivo, a data visualization component library, was used for the pies and graph. Finally, Axios was used to request data from Data.gov.

