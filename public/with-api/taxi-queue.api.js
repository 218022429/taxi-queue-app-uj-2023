document.addEventListener('alpine:init', () => {

	Alpine.data('TaxiQueue', () => {

		return {
			version: 'api-1.0',
			passengerQueueCount: 0,
			taxiQueueCount: 0,
			queueLength: 0,
			init() {
				axios
					.get('/api/passenger/queue')
					.then(result => {
						// an example API call
						this.queueLength = result.data.queueCount
					});
			},
			joinQueue() {
				this.passengerQueueCount++;
			},
			leaveQueue() {
				if (this.passengerQueueCount > 0) {
					this.passengerQueueCount--;
				}
			},

			joinTaxiQueue() {
				this.taxiQueueCount++;
			},

			queueLength() {
				return this.passengerQueueCount;
			},

			taxiQueueLength() {
				return this.passengerQueueCount;
			},

			taxiDepart() {
				if (this.taxiQueueCount > 0) {
					this.taxiQueueCount--;
				}
			}
		}
		});

});


