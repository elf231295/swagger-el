'use strict';

exports.extract digest = function(args, res, next) {
  /**
   * Extract digest
   * Get link to all or ranged by time interval receipts  Generated link changes on new identical request 
   *
   * sendToEmail Integer Send result to email (only 0)
   * fileType String Type of result (json/pdf)
   * dateFrom String Date of interval start (YYYY-MM-DDTHH:MM:SS) (optional)
   * dateTo String Date of interval end (YYYY-MM-DDTHH:MM:SS) (optional)
   * returns DigestResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "url" : "/v1/download/59ec0232fc8edb3880abecf9.json"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.extract digest from generated link example = function(args, res, next) {
  /**
   * Extract digest from generated link example
   * Get digest content (json or pdf)
   *
   * url String 
   * no response value expected for this operation
   **/
  res.end();
}

exports.login = function(args, res, next) {
  /**
   * Login
   * Login request used to check if user exists
   *
   * returns CorrectLoginResponse
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "John",
  "email" : "John@doe.com"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.receipt JSON = function(args, res, next) {
  /**
   * Receipt JSON
   * Get receipt JSON
   *
   * fiscalSign String ФП №
   * sendToEmail String Send JSON to email (only no)
   * deviceId String Device ID with random generated UUID
   * deviceOS String Device OS
   * fn String ФН №
   * fd String ФД №
   * no response value expected for this operation
   **/
  res.end();
}

exports.receipt correctness = function(args, res, next) {
  /**
   * Receipt correctness
   * Check if receipt is correct No response body 
   *
   * fiscalSign String ФП №
   * date String Date of birth of receipt (YYYY-MM-DDTHH:MM:SS)
   * sum String Summary price (without comma)
   * fn String ФН №
   * n String Type of operation (1-4)
   * fd String ФД №
   * no response value expected for this operation
   **/
  res.end();
}

exports.restore password = function(args, res, next) {
  /**
   * Restore password
   * Restore SMS password if forgotten or banned by FTS
   *
   * body RestorePasswordRequest 
   * no response value expected for this operation
   **/
  res.end();
}

exports.sign Up = function(args, res, next) {
  /**
   * Sign Up
   * Register new user and get SMS password If user exists user won't be recreated 
   *
   * body SignUpRequest JSON object
   * no response value expected for this operation
   **/
  res.end();
}

