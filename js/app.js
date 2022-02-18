//    start from here   ///

function inputIs(typeValue) {
    const totalInput = document.getElementById(typeValue);
    const getValue = totalInput.value;
    const convert = parseFloat(getValue);
    return convert;

}


// butoon working field start from here //

document.getElementById('calculate-button').addEventListener("click", function () {

    const income = inputIs('income-input')

    const cloth = inputIs('cloth-cost');

    const rent = inputIs('rent-cost');

    const food = inputIs('food-cost');

    const totalCsot = cloth + rent + food;
    /// -----cost calculate ---------///

    const newBalance = income - totalCsot;
    ///-------- Balance calculate-----///

    //                                     //

    /// ----------%&&%-------------///

    //            &&  error handeling &&                ///
    const expanse = document.getElementById('expanse-amount')
    const getText = parseFloat(expanse.innerText);

    const PresentValance = document.getElementById('amount-show');
    const innreText = parseFloat(PresentValance.innerText);


    if (isNaN(income)) {
        // alert("Enter your income ");
        document.getElementById('incom-error').style.display = 'none';
        const errorMesseg = document.getElementById('incom-error');
        errorMesseg.innerText = 'Enter your income';
        document.getElementById('incom-error').style.display = 'block';

    } else if (isNaN(food)) {
        // alert("Enter your food cost ");
        document.getElementById('incom-error').style.display = 'none';
        const errorMesseg = document.getElementById('incom-error');
        errorMesseg.innerText = 'Enter your food cost ';
        document.getElementById('incom-error').style.display = 'block';

    } else if (isNaN(rent)) {
        // alert("Enter your rent cost ");
        document.getElementById('incom-error').style.display = 'none';
        const errorMesseg = document.getElementById('incom-error');
        errorMesseg.innerText = 'Enter your rent cost';
        document.getElementById('incom-error').style.display = 'block';

    } else if (isNaN(cloth)) {
        // alert("Enter your clooths cost ");
        document.getElementById('incom-error').style.display = 'none';
        const errorMesseg = document.getElementById('incom-error');
        errorMesseg.innerText = 'Enter your clooths cost ';
        document.getElementById('incom-error').style.display = 'block';

    }
    else if (income < 0 || cloth < 0 || rent < 0 || food < 0) {
        document.getElementById('incom-error').style.display = 'block';
    }
    else if (newBalance < 0) {
        document.getElementById('incom-error').style.display = 'none';
        const errorMesseg = document.getElementById('incom-error');
        errorMesseg.innerText = 'Your cost is bigger then your Income';
        document.getElementById('incom-error').style.display = 'block';

    }
    else {
        document.getElementById('incom-error').style.display = 'none';

        expanse.innerText = totalCsot;

        PresentValance.innerText = newBalance;
    }

    ///---------&&%-expanse and income calculate end here-%&&-----------///


})



///------------ saving part start from here--------------///

document.getElementById('saving-button').addEventListener("click", function () {


    const get = document.getElementById('save-amount');
    const getInText = get.innerText;
    const convertNumber = parseFloat(getInText);


    const savingPerchant = inputIs('saveing-input')
    const income = inputIs('income-input')


    if (savingPerchant > 0 && income > savingPerchant) {
        document.getElementById('savings-error').style.display = 'none';

        const perchant = (income / 100) * savingPerchant;
        get.innerText = perchant;

    }

    else if (savingPerchant > income) {
        document.getElementById('savings-error').style.display = 'none';

        document.getElementById('savings-error').style.display = 'block';
    }

    else if (savingPerchant < 0) {
        document.getElementById('savings-error').style.display = 'none';
        const errorMessegSaving = document.getElementById('savings-error');
        errorMessegSaving.innerText = 'input a positve number';
        document.getElementById('savings-error').style.display = 'block';
    }

    else {
        document.getElementById('savings-error').style.display = 'none';
        const errorMessegSaving = document.getElementById('savings-error');
        errorMessegSaving.innerText = 'please input a valid number whith out +,-,*,/,%';
        document.getElementById('savings-error').style.display = 'block';

    }

    const getShowBalance = document.getElementById("amount-show");
    const getAmountInnerText = getShowBalance.innerText;
    const convertShowBalancAmount = parseFloat(getAmountInnerText);


    const getSaveAmount = document.getElementById("save-amount");
    const getAmountText = getSaveAmount.innerText;
    const convertSaveAmount = parseFloat(getAmountText);

    const nowBalance = convertShowBalancAmount - convertSaveAmount;

    const getReming = document.getElementById("remainning-money");
    const remainningText = getReming.innerText;
    const converRemaining = parseFloat(remainningText);

    getReming.innerText = nowBalance;


})

