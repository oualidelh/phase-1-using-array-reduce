const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((prev, curr) => {
    return prev + curr
}, 0)


