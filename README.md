# mysqlsample
**Sample app using publish from Particle Photon/Electron to store data in MySQL using node**

This is a very simple example application for storing data in a local database using Node.js. 

The idea is that your Particle Photon or Electron is generating data. Many people use a cloud-based database solution, but for whatever reason, you may prefer to use your own locally hosted database.

As long as your data transfer limits are within the limits of Particle publish (approximately 256 bytes every second), you can do this very easily using Publish and a simple server written in Node.js.

This example uses MySQL as the database because that's what was originally asked for in the [Particle Community Forum post] (https://community.particle.io/t/https-post-to-mysql-on-localhost/25545) but it might be even easier to use something like CouchDB or Mongo.

The code should be self-explanatory. The .cpp file is the code you flash to your Photon or Electron. It just generates random data; presumably you would normally use a sensor or something.

The mysqlsample.js file contains the code. Make sure you follow the instructions to install the additional npm packages you need.

Also, edit the config.js file to contain your authorization token and MySQL database name and credentials!

There is another example using [local Wi-Fi only] (https://github.com/rickkas7/mysqlsample-wifi) that can be useful if you're using the Photon on an isolated network, not connected to the Internet.




