
'use strict';

exports.inc = (num) => parseInt(num) + 1;

exports.dec = (num) => parseInt(num) - 1;

exports.equals = (a, b, opts) => {
    if(a == b) 
        return opts.fn(this);
    else
        return opts.inverse(this);
};

exports.not_equals = (a, b, opts) => {
    if(a != b) 
        return opts.fn(this);
    else
        return opts.inverse(this);
}
