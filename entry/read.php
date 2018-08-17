<?php
/**
 * Created by PhpStorm.
 * User: Robert
 * Date: 17/08/2018
 * Time: 10:37 AM
 */

// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../objects/entry.php';

$database = new Database();
$db       = $database->getConnection();

$entry = new Entry($db);

$stmt = $entry->read();
$num  = $stmt->rowCount();

if ($num > 0) {
  $entries_arr            = [];
  $entries_arr['records'] = [];

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
    extract($row);

    $entry_item = array(
      'id'           => $id,
      'date_created' => $date_created,
      'comments'     => $comments
    );

    $entries_arr['records'][] = $entry_item;
  }

  print json_encode($entries_arr);
} else {
  print json_encode([
    'message' => 'No entries found'
  ]);
}