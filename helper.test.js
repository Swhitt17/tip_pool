describe("Utilities test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 150;
        tipAmtInput.value = 30;
    submitPaymentInfo();
    });

    it('should sum total tip amount of all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(30);
        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(90);
    });

    it('should sum total bill amount of all payments on sumPaymentTotal()', function(){
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        billAmtInput.value = 300;
        tipAmtInput.value = 60;

        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(450);

    });
    it('should sum total tip percent of all payments on sumPaymentsotal()', function(){
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        billAmtInput.value = 150;
        tipAmtInput.value = 30;

        submitPaymentInfo();
        expect(sumPaymentTotal('tipPercent')).toEqual(40);
    });
    it('should sum tip percent of a single tip on calculateTipPercent()', function(){
        expect(calculateTipPercent(150,30)).toEqual(20);
        expect(calculateTipPercent(100,20)).toEqual(20);
        

    });

    it('should generate new td from value and append to tr on appendTd(tr, value)', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');

    });
    it('should generate delete td from value and append to tr on appendDeleteButton(tr, type)', function(){
        let newTr = document.createElement('tr');
        appendDeleteButton(newTr);
        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function(){
        billAmtInput.value = '';
            tipAmtInput.value = '';
            paymentTbody.innerHTML = '';
            summaryTds[0].innerHTML = '';
            summaryTds[1].innerHTML = '';
            summaryTds[2].innerHTML = '';
            serverTbody.innerHTML = '';
            paymentId = 0;
            allPayments = {};
    });

});