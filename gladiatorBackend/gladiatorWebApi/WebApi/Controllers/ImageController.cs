using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApi.Models;

namespace WebApi.Controllers

{
    [RoutePrefix("api/Image")]
    public class ImageController : ApiController
    {

        [HttpPost]
        [Route("upload/{id}")]
        public string PostUserImage(int id)
        {

            try
            {
                var httpRequest = HttpContext.Current.Request;
                foreach (string file in httpRequest.Files)
                {
                    HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.Created);

                    var postedFile = httpRequest.Files[file];
                    if (postedFile != null && postedFile.ContentLength > 0)
                    {
                        IList<string> AllowedFileExtensions = new List<string> { ".jpg", ".gif", ".png" };
                        var ext = postedFile.FileName.Substring(postedFile.FileName.LastIndexOf('.'));
                        var extension = ext.ToLower();
                        if (!AllowedFileExtensions.Contains(extension))
                        {

                            var message = string.Format("Please Upload image of type .jpg,.gif,.png.");
                            return "Invalid File Extension";
                        }
                        else
                        {
                            var filePath = HttpContext.Current.Server.MapPath("~/Images/" + postedFile.FileName + extension);
                            postedFile.SaveAs(filePath);
                            //Save to DB
                            using (gladiatorEntities db = new gladiatorEntities())
                            {
                                image image = new image()
                                {

                                    imgCaption = httpRequest["ImageCaption"],
                                    imgName = postedFile.FileName,
                                    UID = id
                                   
                                };
                                db.images.Add(image);
                                db.SaveChanges();

                            }


                        }
                    }
                    var message1 = string.Format("Image Updated Successfully.");
                    return message1;
                }
                var res = string.Format("Please Upload a image.");

                return res;
            }
            catch (Exception ex)
            {
                var res = string.Format(ex.ToString());
                return res;
            }
        }
        //public void updateImagetable(int UID)
        //{
        //    using(gladiatorEntities db =new gladiatorEntities())
        //    {
        //        image imageupdate = new image();
                
        //    }
        //}
    }
    
}
    
   
