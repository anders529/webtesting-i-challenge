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
        });
})
it(fail, () => {
    expect(enhancer.fail({
        name: 'Aaron',
        durability: 20,
        enhancement:24
    }))
        .toEqual({
            name: 'Aaron',
            durability: 20,
            enhancement: 23
        });
})
describe('enhancer.js', () => {
    describe('repair()', () => {
        it('increase durability to 100', function() {
            expect(enhancer.repair({
                name: 'Aaron',
                durability:  70,
                enhancement: 10
            })).toEqual({
                name: 'Aaron',
                durability:  100,
                enhancement: 25
            });
        })
    })
})