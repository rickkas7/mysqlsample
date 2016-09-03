module.exports = {
	// authToken is the authorization token to the Particle cloud. You could generate one of these
	// using the Particle Cloud API, or copy and paste it from the settings page of
	// https://build.particle.io
    "authToken": "PASTE_ACCESS_TOKEN_HERE",
    
    // MySQL server configuration. Options are listed here:
    // https://github.com/mysqljs/mysql#establishing-connections
    "mysql": {
    	"host": "localhost",
    	"user": "REPLACE_WITH_MYSQL_USERNAME",
    	"password": "REPLACE_WITH_MYSQL_PASSWORD",
    	"database": "REPLACE_WITH_MYSQL_DATABASE_NAME"
    }
};
