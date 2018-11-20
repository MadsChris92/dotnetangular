using System.Collections.Generic;

namespace DotnetCoreSpa.Domain
{
    public class Post
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }

        public IEnumerable<Comment> Comments { get; set; } = new List<Comment>();

    }
}