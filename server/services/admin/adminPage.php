<?php
  include '../../services/dbservices.php';
  $dbSrv = new dbServices($hostName,$userName,$password,$dbName);
  if($dbSrv->dbConnect()){
  }else{
    echo "DB connection problem";
  }
?>
<main>
    <div class="row justify-content-start align-items-start g-2">
        <div class="col-7">
        <div style="display:flex; justify-content:space-between; padding:3% 0;">
            <h3>ADMIN USERS</h3>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#userAdminModal">
            Add User
            </button>
        </div>
        
        <table class="table table-success">
            <thead>
                <tr>
                    <th>admin_id</th>
                    <th>user_name</th>
                    <th>email</th>
                    <th>profile_url</th>
                    <th>birthday</th>
                    <th>address</th>
                </tr>
            </thead>
            <tbody>
            <?php
                    $result = $dbSrv->selectAll('admin_tb');
                    if ($result->num_rows > 0) {            
                        while($row = $result->fetch_assoc()) {
                          echo "<tr>";
                          foreach ($row as $key=>$value) {
                            if($key!="password"){
                                echo "<td>$value</td>";
                            }
                          }
                          echo "</tr>";
                        }
            
                      } else {
                        echo "0 results";
                      }                
                ?>
            </tbody>
        </table>
        </div>
        <div class="col-1">
        </div>
        <div class="col-4">
        <div style="display:flex; justify-content:space-between; padding:3% 0;">
            <h3>COURSES</h3>
            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#courseModal">
            Add Course
            </button>
        </div>        
        <table class="table table-success">
            <thead>
                <tr>
                    <th>course_id</th>
                    <th>course_name</th>
                    <th>description</th>
                </tr>
            </thead>
            <tbody>
            <?php
                $result = $dbSrv->selectAll('course_tb');
                if ($result->num_rows > 0) {            
                    while($row = $result->fetch_assoc()) {
                        echo "<tr>";
                        foreach ($row as $key=>$value) {
                            echo "<td>$value</td>";
                        }
                        echo "</tr>";
                    }
                } else {
                    echo "0 results";
                }                
                ?>
            </tbody>
        </table>
    </div>
    </div>
</main>
<?php include './pages/footer.php'; ?>



<!-- Modal User Admin -->
<div class="modal fade" id="userAdminModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 800px;">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Add New Admin User
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="<?php echo $baseName?>adminUserAdd.php" method="POST">
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="email"
              class="form-control" name="email" id="email" placeholder="E-mail" required>
            <label for="email">E-mail:</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="user_name" id="user_name" placeholder="Full Name" required>
            <label for="user_name">Full Name:</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control" name="password" id="password" placeholder="password" required>
            <label for="password">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="address" id="address" placeholder="Address">
            <label for="address">Address</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="date"
              class="form-control" name="birthday" id="birthday" placeholder="Birthday">
            <label for="birthday">Birthday</label>
          </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <input type="submit" class="btn btn-success" value="Save">
          </div>
      </form>
    </div>
  </div>
</div>

<!-- Modal Course-->
<div class="modal fade" id="courseModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="max-width: 800px;">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">
          Add New Course
        </h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form action="<?php echo $baseName?>courseAdd.php" method="POST">
        <div class="modal-body">
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="course_name" id="course_name" placeholder="Course Name" required>
            <label for="course_name">Course Name: </label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control" name="description" id="description" placeholder="Description" required>
            <label for="description">Description:</label>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <input type="submit" class="btn btn-success" value="Save">
          </div>
      </form>
    </div>
  </div>
</div>