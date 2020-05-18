function CreateAnalytics() {
    let count = 0;
    this.up = function () {
        return (count += 1);
    };
    this.clear = function () {
        console.log('analytics', count);
        return (count = 0);
    };

}

window.analyticsCounter = new CreateAnalytics();
