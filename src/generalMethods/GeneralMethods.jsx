class GeneralMethods {

    validateEmail(mail)  {
        // eslint-disable-next-line no-useless-escape
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        } else {
            return false;
        }
    }
}
export default GeneralMethods;