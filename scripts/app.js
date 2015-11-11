(function (angular) {
    'use strict';
    angular.module('account1', ['appdata'])
      .controller('accountController', ['KYCOptions','filterFilter', function (KYCOptions,filterFilter) {

          this.nickName = "";
          this.myAccountType = 'private';   // Default;
          this.myPurposes;  //checkboxes
          this.myOrigin;    //checkboxes
          this.myDeposit;           //radios
          this.myfrequencyDeposit; //radios
          this.myhowDeposit;        //radios
          this.myfrequencyWithdraw; //radios
          this.otherBank = "";      
          
          this.MyAccounts = [];
          var Accounts = [];

          this.tooglePurpose = function tooglePurpose(index) {
            if (KYCOptions.purposes[index].isSelected == 'true') {
                  KYCOptions.purposes[index].isSelected = ''
              } else {
                  KYCOptions.purposes[index].isSelected = 'true'
              }
              this.myPurposes = filterFilter(KYCOptions.purposes, { isSelected: 'true' });
          };
          this.toogleOrigin = function toogleOrigin(index) {
              if (KYCOptions.origin[index].isSelected == 'true') {
                  KYCOptions.origin[index].isSelected = ''
              } else {
                  KYCOptions.origin[index].isSelected = 'true'
              }
              this.myOrigin = filterFilter(KYCOptions.origin, { isSelected: 'true' });
          };

          this.toogleHowDeposit = function toogleHowDeposit(index) {
              if (KYCOptions.howDeposit[index].isSelected == 'true') {
                  KYCOptions.howDeposit[index].isSelected = ''
              } else {
                  KYCOptions.howDeposit[index].isSelected = 'true'
              }
              this.myhowDeposit = filterFilter(KYCOptions.howDeposit, { isSelected: 'true' });
          };

          this.addAccount = function addAccount() {
              var temp = angular.copy(this);
              console.log(temp);
              console.log(temp.myPurposes);
              //this.MyAccounts.push(angular.copy(this));
              this.MyAccounts.push(temp);
              //console.table(MyAccounts[0].myPurposes);

          };
          this.delete = function (index) {
              
              console.log("index =" + index);
              console.log(this.MyAccounts);
              console.log("före")
              console.log("length" + this.MyAccounts.length);
              this.MyAccounts.splice(index, 1);
              console.log("efter")
              console.log("length" + this.MyAccounts.length);
              console.log(this.MyAccounts);
          };
      }]);
})(window.angular);


angular.module('appdata', [])
.factory('KYCOptions', function () {
    //KONTOTYP
    this.accountType = [{ value: 'Private', label: 'Privatkonto', isSelected: 'true' }, { value: 'Savings', label: 'Sparkonto', isSelected: 'false' }]
    //SYFTE MED KONTOT
    var purposes = [{ value: 'Buffert', label: 'BUFFFERT', isSelected: 'false' },
                       { value: 'Investement', label: 'INVESTERING', isSelected: 'false' },
                       { value: 'Commodity', label: 'SPARANDE TILL KAPITALVARA', isSelected: 'false' },
                       { value: 'House', label: 'SPARANDE TILL BOSTAD/FRITIDSBOSTAD', isSelected: 'false' }];
    //VARIFRÅN KOMMER PENGARNA?
    var origin = [{ value: 'Salary', label: 'LÖN/PENSION/STUDIEMEDEL/BONUSUTBETALNING', isSelected: 'false' },
                    { value: 'Benefit', label: 'BARNBIDRAG/ANNAN FÖRMÅN', isSelected: 'false' },
                    { value: 'Sales', label: 'FÖRSÄLJNING AV FASTIGHET/BOSTADSRÄTT', isSelected: 'false' },
                    { value: 'Savings', label: 'TIDIGARE SPARANDE/INVESTERING', isSelected: 'false' }];
    //OMFATTNING INSÄTTNING (BELOPP/GÅNG)
    var deposit = [{ value: '9999', label: 'MINDRE ÄN 10 000 KR', isSelected: 'false' },
                    { value: '24999', label: '10 001-25 000 KR', isSelected: 'false' },
                    { value: '49999', label: '25 001-55 000 KR', isSelected: 'false' },
                    { value: '50001', label: 'MER ÄN 50 000 KR', isSelected: 'false' }];
    //OMFATTNING INSÄTTNING (PERIODICITET)
    var frequencyDeposit = [{ value: 'once', label: 'ENGÅNGSBELOPP', isSelected: 'false' },
                                { value: '1', label: 'MINDRE ÄN 1 GÅNG/MÅNAD', isSelected: 'false' },
                                { value: '5', label: '1-5 GÅNNGER/MÅNAD', isSelected: 'false' },
                                { value: '6', label: 'MER ÄN 5 GÅNGER/MÅNAD', isSelected: 'false' }];
    //HUR KOMMER PENGARNA ATT SÄTTAS IN?
    var howDeposit = [{ value: 'ownAccount', label: 'FRÅN EGET KONTO', isSelected: 'false' },
                      { value: 'cash', label: 'KONTANTER', isSelected: 'false' },
                      { value: 'anotherBank', label: 'FRÅN ANNAN BANK', isSelected: 'false' }];
    //OMFATTNING UTTAG (PERIODICITET)
    var frequencyWithdraw = [{ value: '1', label: 'MINDRE ÄN 1 GÅNG/MÅNAD', isSelected: 'false' },
                               { value: '5', label: '1-5 GÅNNGER/MÅNAD', isSelected: 'false' },
                               { value: '6', label: 'MER ÄN 5 GÅNGER/MÅNAD', isSelected: 'false' }];

    return {
        purposes: purposes,
        origin: origin,
        deposit: deposit,
        frequencyDeposit: frequencyDeposit,
        howDeposit: howDeposit,
        frequencyWithdraw: frequencyWithdraw
    };
});


(function (angular) {
    'use strict';
    angular.module('invoice3', ['finance3'])
      .controller('InvoiceController', ['currencyConverter', function (currencyConverter) {
          this.qty = 1;
          this.cost = 2;
          this.inCurr = 'EUR';
          this.currencies = currencyConverter.currencies;

          this.total = function total(outCurr) {
              return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
          };
          this.pay = function pay() {
              window.alert("Thanks!");
          };
      }]);
})(window.angular);
(function (angular) {
    'use strict';
    angular.module('finance3', [])
      .factory('currencyConverter', ['$http', function ($http) {
          var YAHOO_FINANCE_URL_PATTERN =
                '//query.yahooapis.com/v1/public/yql?q=select * from ' +
                'yahoo.finance.xchange where pair in ("PAIRS")&format=json&' +
                'env=store://datatables.org/alltableswithkeys&callback=JSON_CALLBACK';
          var currencies = ['USD', 'EUR', 'CNY'];
          var usdToForeignRates = {};

          var convert = function (amount, inCurr, outCurr) {
              return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
          };

          var refresh = function () {
              var url = YAHOO_FINANCE_URL_PATTERN.
                         replace('PAIRS', 'USD' + currencies.join('","USD'));
              return $http.jsonp(url).success(function (data) {
                  var newUsdToForeignRates = {};
                  angular.forEach(data.query.results.rate, function (rate) {
                      var currency = rate.id.substring(3, 6);
                      newUsdToForeignRates[currency] = window.parseFloat(rate.Rate);
                  });
                  usdToForeignRates = newUsdToForeignRates;
              });
          };

          refresh();

          return {
              currencies: currencies,
              convert: convert,
              refresh: refresh
          };
      }]);
})(window.angular);
