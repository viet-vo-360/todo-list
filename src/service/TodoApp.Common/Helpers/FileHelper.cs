using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;

namespace TodoApp.Common.Helpers
{
    public static class FileHelper
    {
        public static List<T> LoadJsonFile<T>(string jsonPath)
        {
			try
			{
                using (StreamReader sr = new StreamReader(jsonPath))
                {
                    string json =  sr.ReadToEnd();
                    return JsonConvert.DeserializeObject<List<T>>(json);
                }
            }
			catch (Exception e)
			{
                return new List<T>();
            }
        }

        public static void LoadJsonFile<T>(string jsonPath, List<T> data)
        {
            try
            {
                using (StreamWriter sw = new StreamWriter(jsonPath))
                {
                    string text = JsonConvert.SerializeObject(data);
                    sw.Write(text);
                }
            }
            catch (Exception e)
            {
            }
        }
    }
}
