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

  public function read(){
    $query = "SELECT e.id, e.date_created, e.comments
              FROM {$this->table_name} e
              ORDER BY e.date_created DESC";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }
}