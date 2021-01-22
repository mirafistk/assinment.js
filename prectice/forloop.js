const expr = 'papayas';
switch(expr){
    case 'oranges':
        console.log('Oranges are $0.50 a pound')
        // break;
        case 'mangoes':
        case 'papayas':
            console.log('mangoes and papayas are $2.79 a pound'
            );
            // break;
            default:
                console.log(`sorry, we are out of ${expr}.`);
}