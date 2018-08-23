<?php
/**
 * Created by PhpStorm.
 * User: Robert
 * Date: 17/08/2018
 * Time: 10:32 AM
 */

class Entry
{
  private $conn;
  private $table_name     = 'entries';
  private $messages_table = 'messages';

  public $id;
  public $date_created;
  public $comments;
  public $messages;

  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function read()
  {
    $query = "SELECT e.id, e.date_created, e.comments
              FROM {$this->table_name} e
              ORDER BY e.date_created DESC";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }

  public function getMessages($entry_id)
  {
    $query = "SELECT m.id, m.person, m.message 
              FROM `{$this->messages_table}` m 
              WHERE m.entry_id = '{$entry_id}' 
              ORDER BY m.weight ";

    $stmt = $this->conn->prepare($query);
    $stmt->execute();

    return $stmt;
  }

  public function create()
  {
    $query = "INSERT INTO {$this->table_name}
              SET
                comments=:comments,
                date_created=:date_created";

    $stmt = $this->conn->prepare($query);

    // sanitize
    $this->comments     = htmlspecialchars(strip_tags($this->comments));
    $this->date_created = htmlspecialchars(strip_tags($this->date_created));

    // bind values
    $stmt->bindParam(':comments', $this->comments);
    $stmt->bindParam(':date_created', $this->date_created);

    if ($stmt->execute()) {
      // Create messages
      $message_arr = (array)$this->messages;
      $entry_id = $this->conn->lastInsertId();

      if (is_array($message_arr) && count($message_arr)){
        $weight = 0;
        foreach ($message_arr as $message_obj) {
          $query = "INSERT INTO {$this->messages_table}
                    SET 
                      person=:person,
                      message=:message,
                      entry_id=:entry_id,
                      weight=:weight";
          $stmt = $this->conn->prepare($query);

          // sanitize
          $person = htmlspecialchars(strip_tags($message_obj->person));
          $message = htmlspecialchars(strip_tags($message_obj->message));

          // bind values
          $stmt->bindParam(':person', $person);
          $stmt->bindParam(':message', $message);
          $stmt->bindParam(':entry_id', $entry_id);
          $stmt->bindParam(':weight', $weight);

          $stmt->execute();
          $weight++;
        }
    }

      return true;
    }

    return false;
  }
}