function work(a, b) {
    console.log( a + b );
}

function spy(f) {
    function returnCalls(...args) {
        returnCalls.calls.push(args);
        return f.apply(this, args);
    }

    returnCalls.calls = [];
    return returnCalls;
}

work = spy(work);

work(1, 2);
work(4, 5);

for (let args of work.calls) {
    console.log( 'call: ' + args.join() );
}
