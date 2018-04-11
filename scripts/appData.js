angular.module('appdata', [])
.factory('options', function () {

          //SYFTE MED KONTOT
        var purposes = [{ value: 'Buffert', label: 'BUFFFERT', isSelected: "false" },
                           { value: 'Investement', label: 'INVESTERING' , isSelected : "false" },
                           { value: 'Commodity', label: 'SPARANDE TILL KAPITALVARA' , isSelected : "false" },
                           { value: 'House', label: 'SPARANDE TILL BOSTAD/FRITIDSBOSTAD' , isSelected : "false" }];
          //VARIFRÄN KOMMER PENGARNA?
        var origin = [{value:'Salary',label:'LÖN/PENSION/STUDIEMEDEL/BONUSUTBETALNING', isSelected : "false" },
                        { value: 'Benefit', label: 'BARNBIDRAG/ANNAN FÖRMÅN' , isSelected : "false" },
                        { value: 'Sales', label: 'FÖRSÄLJNING AV FASTIGHET/BOSTADSRÄTT' , isSelected : "false" },
                        { value: 'Savings', label: 'TIDIGARE SPARANDE/INVESTERING' , isSelected : "false" }];
          //OMFATTNING INSÄTTNING (BELOPP/GÅNG)
        var deposit = [{ value: '9999', label: 'MINDRE ÄN 10 000 KR' , isSelected : "false" },
                        { value: '24999', label: '10 001-25 000 KR' , isSelected : "false" },
                        { value: '49999', label: '25 001-55 000 KR' , isSelected : "false" },
                        { value: '50001', label: 'MER ÄN 50 000 KR' , isSelected : "false" }];
          //OMFATTNING INSÄTTNING (PERIODICITET)
        var frequencyDeposit = [{ value: 'once', label: 'ENGÄNGSBELOPP' , isSelected : "false" },
                                    { value: '1', label: 'MINDRE ÄN 1 GÄNG/MÄNAD' , isSelected : "false" },
                                    { value: '5', label: '1-5 GÄNNGER/MÄNAD' , isSelected : "false" },
                                    { value: '6', label: 'MER ÄN 5 GÄNGER/MÄNAD' , isSelected : "false" }];
          //HUR KOMMER PENGARNA ATT SÄTTAS IN?
          var howDeposit = [{ value: 'ownAccount', label: 'FRÄN EGET KONTO' , isSelected : "false" },
                            { value: 'cash', label: 'KONTANTER' , isSelected : "true" },
                            { value: 'anotherBank', label: 'FRÄN ANNAN BANK' , isSelected : "false" }];
          //OMFATTNING UTTAG (PERIODICITET)
          var frequencyWithdraw = [{ value: '1', label: 'MINDRE ÄN 1 GÄNG/MÄNAD', isSelected: "false" },
                                     { value: '5', label: '1-5 GÄNNGER/MÄNAD', isSelected: "false" },
                                     { value: '6', label: 'MER ÄN 5 GÄNGER/MÄNAD', isSelected: "false" }];

        return {
            purposes: purposes,
            origin: origin,
            deposit : deposit,
            frequencyDeposit: frequencyDeposit,
            howDeposit: howDeposit,
            frequencyWithdraw : frequencyWithdraw
        };
});