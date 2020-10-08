const robot = require('./robot').robot;

describe('Robot module', () => {
    // ARRANGE: setup variables or dependencies.
    // The list of commands that will be sent to the Robot script
    const instructions = [
        "PLACE 1,2,NORTH",
        "REPORT"
    ];

    // ACT: execute the function to be tested using the control values created above.
    // Calling each of those commands will produce an Array of results
    const result = instructions.map(i => robot.do(i));
    // ASSERT: verify that the requirements of your test were met.
    // BUILD YOUR TESTS HERE

    // 1. Test that result is an array.
    test('result should be an array', () => {
        // usin gthe Array.isArray method I can check weather result is an array
        // and if it is toBeTruthy() will pass 
        expect(Array.isArray(result)).toBeTruthy()
    })


    // 2. Test that result[1] is of type object.
    test('the second element of "result" should be a report object', () => {
        // check that result one is an instance of the Object
        expect(result[1]).toBeInstanceOf(Object)
    })



    describe('Validate report values', () => {
        // Create this variable after checking that type is object.
        const report = result[1];

        // 3. Test that report contains the properties: action, x, y, and facing.
        test('report should contain the properties: action, x, y, facing', () => {
            // I check weather report has a property and if it does I check the next until the end
            expect(report).toHaveProperty('action')
            expect(report).toHaveProperty('x')
            expect(report).toHaveProperty('y')
            expect(report).toHaveProperty('facing')
        })


        // 4. Test that report.x is a number between 0 and 5.
        test('report.x should be a number betweeen 0 and 5', () => {
            // I check weather report.x is greater than 0 and after check if its less than zero
            expect(report.x).toBeGreaterThan(0)
            expect(report.x).toBeLessThan(5)
        })

        // 5. Test that report.y is a number between 0 and 5.
        test('report.y should be a number betweeen 0 and 5', () => {
            expect(report.y).toBeGreaterThan(0)
            expect(report.y).toBeLessThan(5)
        })


        // 6. Test that report.facing is one of: NORTH, SOUTH, EAST, or WEST.
        test('report.facing should be one of: NORTH, SOUTH, EAST, WEST', () => {
            // using the .includes methods on strings and arrays I can check if NORTH SOUTH EAST or WEST is in
            // the report.facing and if yes the test pass
            expect(report.facing.includes('NORTH', 'SOUTH', 'EAST', 'WEST')).toBeTruthy()
        })

    })
})