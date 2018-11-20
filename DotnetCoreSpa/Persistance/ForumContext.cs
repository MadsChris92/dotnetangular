using DotnetCoreSpa.Domain;
using Microsoft.EntityFrameworkCore;

namespace DotnetCoreSpa.Persistance
{
    public class ForumContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        public DbSet<Comment> Comments { get; set; }

        // connectionstring Data Source=(localdb)\MSSQLLocalDB;Initial Catalog=Data;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder){
            optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB;Initial Catalog=Data;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
        }
    }
}