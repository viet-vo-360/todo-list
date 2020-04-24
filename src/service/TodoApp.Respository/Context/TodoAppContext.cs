using Microsoft.EntityFrameworkCore;
using TodoApp.Data;

namespace TodoApp.Respository.Context
{
    public class TodoAppContext : DbContext
    {
        public DbSet<Todo> Todos { get; set; }

        public TodoAppContext(DbContextOptions<TodoAppContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Todo>().ToTable("todos");
            builder.Entity<Todo>().HasKey(p => p.Key);
            builder.Entity<Todo>().Property(p => p.Key).IsRequired().ValueGeneratedOnAdd();
            builder.Entity<Todo>().Property(p => p.Title).IsRequired().HasMaxLength(50);
            builder.Entity<Todo>().Property(p => p.Date).IsRequired();
            builder.Entity<Todo>().Property(p => p.Category).IsRequired();
            builder.Entity<Todo>().Property(p => p.Completed).IsRequired();
            builder.Entity<Todo>().Property(p => p.IsChecked).IsRequired();
            builder.Entity<Todo>().Property(p => p.IsImportant).IsRequired();
            builder.Entity<Todo>().Property(p => p.DataIndex).IsRequired();

            //builder.Entity<Todo>().HasData(FileHelper.LoadJsonFile<Todo>(@"Data/todos.json"));
        }
    }
}