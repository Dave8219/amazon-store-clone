import {formatCurrency} from '../../scripts/utils/money.js';

describe('test suite: formatCurrency',() => {

it('converts cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
});


it('works with 0', () => {
expect(formatCurrency(0)).toEqual('0.00');
});

it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
});

it('rounds down to the nearest cent', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00');
});

//tests with negative numbers
it('test with negative numbers, converts cents into dollars', () => {
expect(formatCurrency(-2095)).toEqual('-20.95');
});
//rounding works a bit different with negative numbers: rounding up means getting closer to 0 value or positive, while rounding down means going higher into the negative values. 
it('tests with a negative number, rounds up to the nearest cent', () => {
    expect(formatCurrency(-2000.4)).toEqual('-20.00');
});

it('test with negative numbers, rounds down to the nearest cent', () => {
    expect(formatCurrency(-2000.7)).toEqual('-20.01');
});

}); 