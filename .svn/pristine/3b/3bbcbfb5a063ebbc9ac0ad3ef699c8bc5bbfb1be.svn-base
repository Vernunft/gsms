/**
 * Created by Warren on 2016/9/22.
 */
import javax.xml.namespace.QName;
import org.apache.axis2.*;
import org.apache.axis2.addressing.EndpointReference;
import org.apache.axis2.client.Options;
import org.apache.axis2.rpc.client.RPCServiceClient;

public class TestWebService {
    public static void main(String args[]) throws AxisFault{

        //使用RPC方式调用WebService
        RPCServiceClient serviceClient = new RPCServiceClient();
        Options options = serviceClient.getOptions();

        //  指定调用WebService的URL
        EndpointReference targetEPR = new EndpointReference(
                "http://localhost/WebService?wsdl");
        options.setTo(targetEPR);
        options.setAction("getName");
    }

}
