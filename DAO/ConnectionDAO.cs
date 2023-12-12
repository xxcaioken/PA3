using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace ProjetoAplicado.DAO
{
    public class ConnectionDAO
    {
        private static readonly string connectionString = "Data Source=ENGUIA;Initial Catalog=PA;User ID=admin;Password=admin;MultipleActiveResultSets=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;Application Name=YourAppName;Persist Security Info=False;";

        public List<T> RunSelectQuery<T>(string query) where T : new()
        {
            List<T> resultList = new List<T>();

            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    using (SqlDataReader reader = command.ExecuteReader())
                    {
                        while (reader.Read())
                        {
                            T item = new T();

                            // Assuming T is of type Event in this example
                            if (item is Event)
                            {
                                Event eventItem = item as Event;
                                eventItem.name = reader["name"].ToString();
                                eventItem.date = reader["date"].ToString();
                                eventItem.description = reader["description"].ToString();
                            }

                            resultList.Add(item);
                        }
                    }
                }
            }

            return resultList;
        }

        public void RunVoidQuery(string query, object parameters = null)
        {
            using (SqlConnection connection = new SqlConnection(connectionString))
            {
                connection.Open();

                using (SqlCommand command = new SqlCommand(query, connection))
                {
                    if (parameters != null)
                    {
                        AddParameters(command, parameters);
                    }

                    command.ExecuteNonQuery();
                }
            }
        }


        private void AddParameters(SqlCommand command, object parameters)
        {
            foreach (var property in parameters.GetType().GetProperties())
            {
                command.Parameters.AddWithValue("@" + property.Name, property.GetValue(parameters));
            }
        }


    }
}
