namespace ProjetoAplicado.DAO
{
    public class EventDAO
    {
        public interface IEventDAO
        {
            public List<Event> Read();
            public void Insert(Event model);
            public void Remove(EventDelete name);

        }
        public EventDAO() { }

        public List<Event> Read()
        {
            ConnectionDAO connectionDAO = new ConnectionDAO();
            return connectionDAO.RunSelectQuery<Event>("select * from dbo.Event;");
        }

        public void Insert(Event model)
        {
            ConnectionDAO connectionDAO = new ConnectionDAO();
            var parameters = new
            {
                Name = model.name, 
                Date = model.date, 
                Description = model.description, 
            };

            connectionDAO.RunVoidQuery("INSERT INTO dbo.event (name, date, description) VALUES (@Name, @Date, @Description)", parameters);
        }

        public void Remove(EventDelete name)
        {
            ConnectionDAO connectionDAO = new ConnectionDAO();
            var parameters = new
            {
                Name = name.name
            };

            connectionDAO.RunVoidQuery("delete from dbo.event where name = @Name", parameters);
        }

    }
}
