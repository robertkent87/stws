<?php
/**
 * Created by PhpStorm.
 * User: Robert
 * Date: 17/08/2018
 * Time: 10:32 AM
 */

class Entry {
  private $conn;
  private $table_name = 'entries';

  public $id;
  public $date_created;
  public $comments;

  public function __construct($db)
  {
    $this->conn = $db;
  }
}