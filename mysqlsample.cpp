#include "Particle.h"

SYSTEM_THREAD(ENABLED);

const char *EVENT_NAME = "mysqlSample1";
const unsigned long EVENT_PERIOD_MS = 10000;

unsigned long lastPublish = 0;

void setup() {
	Serial.begin(9600);
}

void loop() {

	if (millis() - lastPublish >= EVENT_PERIOD_MS) {
		lastPublish = millis();

		if (Particle.connected()) {
			char data[256];

			// Just a random value for testing. You might use a sensor value here instead
			int a = rand() % 65536;

			// Prepare a buffer with JSON data
			snprintf(data, sizeof(data), "{\"a\":%d}", a);

			// Send to the cloud
			Particle.publish(EVENT_NAME, data, PRIVATE);
			Serial.println(data);
		}
	}
}
