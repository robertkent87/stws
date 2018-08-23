<?php
/**
 * Created by PhpStorm.
 * User: Robert
 * Date: 17/08/2018
 * Time: 4:28 PM
 */
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include_once '../config/database.php';
include_once '../objects/entry.php';

$database = new Database();
$db       = $database->getConnection();

$entry = new Entry($db);

// get POSTed data
$data = json_decode(file_get_contents('php://input'));

// set entry property values
$entry->comments     = $data->comments;
$entry->messages = $data->messages;
$entry->date_created = date('Y-m-d H:i:s');

// create entry
if ($entry->create()) {
  print '{"message": "Entry was created."}';
}
else {
  print '{"message": "Unable to create entry."}';
}