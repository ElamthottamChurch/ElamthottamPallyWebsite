document.addEventListener("DOMContentLoaded", () => {
    fetch("../data/fb-posts.json")
      .then(response => response.json())
      .then(posts => {
        const container = document.getElementById("fb-posts");
        posts.forEach(post => {
          const fbEmbedDiv = document.createElement("div");
          fbEmbedDiv.className = "fb-post";
          fbEmbedDiv.setAttribute("data-href", post.postLink);
          fbEmbedDiv.setAttribute("data-width", "500");
          container.appendChild(fbEmbedDiv);
        });
        if (typeof FB !== "undefined") {
          FB.XFBML.parse(); // Re-parse to render newly added embeds
        }
      });
  });
  