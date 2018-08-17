<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Shit my manager says</title>

  <!-- Bootstrap CSS -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" media="screen" />

  <!-- Custom CSS -->
  <link href="app/assets/css/custom.css" rel="stylesheet" media="screen" />

</head>
<body>

<!-- container -->
<div class="container">

  <div class="page-header">
    <h1>Loading...</h1>
  </div>

  <!-- placeholder for rendering react components -->
  <div id='content'></div>

</div>
<!-- /container -->

<!-- Load React. -->
<!-- Note: when deploying, replace "development.js" with "production.min.js". -->
<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<!-- react code -->
<script type="text/babel" src="app/entry/create_message.component.js"></script>
<script type="text/babel" src="app/entry/create_entry.component.js"></script>
<script type="text/babel" src="app/entry/entry_row.component.js"></script>
<script type="text/babel" src="app/entry/entry_list.component.js"></script>
<script type="text/babel" src="app/entry/top_actions.component.js"></script>
<script type="text/babel" src="app/entry/read_entries.component.js"></script>
<script type="text/babel" src="app/main.component.js"></script>

<!-- jQuery library required by bootsrap js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- bootstrap JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

</body>
</html>