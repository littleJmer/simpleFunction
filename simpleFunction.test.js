const { simpleFunction } = require('./simpleFunction.js');

describe("Success Test Cases", function() {
    test('Parsing >> Smooth', function () {
        expect(simpleFunction("Smooth")).toBe('S3h')
    });
    
    test('Parsing >> Smth??ABCDEF', function () {
        expect(simpleFunction("Smth??ABCDEF")).toBe('S2h??A4F')
    });
    
    test('Parsing >> ab ?', function () {
        expect(simpleFunction("ab ?")).toBe('a0b ?')
    });
    
    test('Parsing >> )*&&^ should retun same string', function () {
        expect(simpleFunction(")*&&^")).toBe(')*&&^')
    });

    test('Parsing >> Anita lava la tina', function () {
        expect(simpleFunction("Anita lava la tina")).toBe('A3a l2a l0a t2a')
    });
    
});

describe("Edge Test Cases", function() {
    test('Parsing >> A^&* should retun false', function () {
        expect(simpleFunction("A^&*")).toBe(false)
    });

    test('Parsing >> should retun empty string', function () {
        expect(simpleFunction("")).toBe('')
    });

    test('Parsing >> 1 as number should return false', function () {
        expect(simpleFunction(1)).toBe(false)
    });
});