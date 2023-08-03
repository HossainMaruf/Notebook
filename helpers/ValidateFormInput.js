class Validation {
  // Username validation
  static ValidUsername(username) {
  	const name_len = username.trim().length;
  	if(name_len < 3 || name_len > 15) { return false; }	
    return true;
  }
	static ValidEmail(email) {
  	const isValid = email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  	return  isValid;
	}

	static ValidPassword(password) {
  	const pass_len = password.trim().length;
  	if(pass_len < 3 || pass_len > 15) return false;
  	return true;
	}

	/**
	 * Get the form data
	 * @param {object}
	 * @return {object} data [description]
	 */
  static ValidateRegistration(data) {
  	const errors = {
  		username: "",
  		email: "",
  		password: "",
      confirmPassword: ""
  	};

    if(!this.ValidUsername(data.username)) {
  		errors.username = "Name must be between 3 to 15 characters";
    }
  	if(!this.ValidEmail(data.email)) {
  		errors.email = "Email is invalid";
  	}
  	if(!this.ValidPassword(data.password)) {
  		errors.password = "Password must be between 3 to 15 characters";
  	}
    if(data.password != data.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }

  	return errors;
  }

  static ValidateLogin(data) {
  	const errors = {
  		email: "",
  		password: ""
  	}
  	if(!this.ValidEmail(data.email)) {
  		errors.email = "Email is invalid";
  	}
  	if(!this.ValidPassword(data.password)) {
  		errors.password = "Password must be between 3 to 15 characters";
  	}
  	return errors;
  }


  /**
   * Count the error in a error object
   * @param {input} Object [description]
   * @return {int} Number [description]
   */
  static ErrorCount(errors) {
  	let count = 0;
  	for(const property in errors) {
  		if(errors[property].length != 0) count++;
  	}
  	return count;
  }

}

module.exports = {Validation}