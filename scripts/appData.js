angular.module('appdata', [])
.factory('options', function () {

          //SYFTE MED KONTOT
        var purposes = [{ value: 'Buffert', label: 'BUFFFERT', isSelected: "false" },
                           { value: 'Investement', label: 'INVESTERING' , isSelected : "false" },
                           { value: 'Commodity', label: 'SPARANDE TILL KAPITALVARA' , isSelected : "false" },
                           { value: 'House', label: 'SPARANDE TILL BOSTAD/FRITIDSBOSTAD' , isSelected : "false" }];
          //VARIFR�N KOMMER PENGARNA?
        var origin = [{value:'Salary',label:'L�N/PENSION/STUDIEMEDEL/BONUSUTBETALNING', isSelected : "false" }, 
                        { value: 'Benefit', label: 'BARNBIDRAG/ANNAN F�RM�N' , isSelected : "false" },
                        { value: 'Sales', label: 'F�RS�LJNING AV FASTIGHET/BOSTADSR�TT' , isSelected : "false" },
                        { value: 'Savings', label: 'TIDIGARE SPARANDE/INVESTERING' , isSelected : "false" }];
          //OMFATTNING INS�TTNING (BELOPP/G�NG)
        var deposit = [{ value: '9999', label: 'MINDRE �N 10 000 KR' , isSelected : "false" },
                        { value: '24999', label: '10 001-25 000 KR' , isSelected : "false" },
                        { value: '49999', label: '25 001-55 000 KR' , isSelected : "false" },
                        { value: '50001', label: 'MER �N 50 000 KR' , isSelected : "false" }];
          //OMFATTNING INS�TTNING (PERIODICITET)
        var frequencyDeposit = [{ value: 'once', label: 'ENG�NGSBELOPP' , isSelected : "false" },
                                    { value: '1', label: 'MINDRE �N 1 G�NG/M�NAD' , isSelected : "false" },
                                    { value: '5', label: '1-5 G�NNGER/M�NAD' , isSelected : "false" },
                                    { value: '6', label: 'MER �N 5 G�NGER/M�NAD' , isSelected : "false" }];
          //HUR KOMMER PENGARNA ATT S�TTAS IN?
          var howDeposit = [{ value: 'ownAccount', label: 'FR�N EGET KONTO' , isSelected : "false" },
                            { value: 'cash', label: 'KONTANTER' , isSelected : "true" },
                            { value: 'anotherBank', label: 'FR�N ANNAN BANK' , isSelected : "false" }];
          //OMFATTNING UTTAG (PERIODICITET)
          var frequencyWithdraw = [{ value: '1', label: 'MINDRE �N 1 G�NG/M�NAD', isSelected: "false" },
                                     { value: '5', label: '1-5 G�NNGER/M�NAD', isSelected: "false" },
                                     { value: '6', label: 'MER �N 5 G�NGER/M�NAD', isSelected: "false" }];

        return {
            purposes: purposes,
            origin: origin,
            deposit : deposit,
            frequencyDeposit: frequencyDeposit,
            howDeposit: howDeposit,
            frequencyWithdraw : frequencyWithdraw
        };
});