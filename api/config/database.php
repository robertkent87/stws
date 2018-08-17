<?php
/**
 * Created by PhpStorm.
 * User: Robert
 * Date: 17/08/2018
 * Time: 10:12 AM
 */

class Database
{
  private $host     = 'localhost';
  private $db_name  = 'stws';
  private $username = 'stws_user';
  private $password = 'm9TCSHobghw9CZ3N';

  public $conn;

  /**
   * @return mixed
   */
  public function getConnection()
  {
    $this->conn = null;

    try {
      $this->conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->db_name, $this->username,
        $this->password);
      $this->conn->exec('set names utf8');
    } catch (PDOException $exception) {
      print 'Connection error: ' . $exception->getMessage();
    }

    return $this->conn;
  }
}