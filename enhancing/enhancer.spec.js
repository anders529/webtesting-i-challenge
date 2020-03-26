const enhancer = require('./enhancer.js');
// test away!
it('repair', () => {
    expect(enhancer.repair({
        name: 'Aaron',
        durability: 95,
        enhancement: 30
    }))
        .toEqual({
            name: 'Aaron',
            durability: 100,
            enhancement: 30
        });
})
it('succeed', () => {
    expect(enhancer.succeed({
        name: 'Aaron',
        durability: 80,
        enhancement: 20
    }))
        .toEqual({
            name: 'Aaron',
            durability: 80,
            enhancement: 25
        })
})
