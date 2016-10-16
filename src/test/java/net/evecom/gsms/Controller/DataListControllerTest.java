/*
 * Copyright (c) 2005, 2016, EVECOM Technology Co.,Ltd. All rights reserved.
 * EVECOM PROPRIETARY/CONFIDENTIAL. Use is subject to license terms.
 *
 */
package net.evecom.gsms.Controller;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.databind.ObjectMapper;

import net.evecom.gsms.utils.DTO;

/**
 * 描述
 * 
 * @author Icey Li
 * @created 2016年10月2日 下午3:35:50
 */
@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(locations = { "classpath*:spring-mvc.xml", "classpath*:applicationContext.xml" })
@ActiveProfiles("production")
public class DataListControllerTest {
    @Autowired
    WebApplicationContext wac;

    MockMvc mockMvc;

    @Before()
    public void setup() {
        mockMvc = webAppContextSetup(wac).build();
    }
    @Test
    public void deleteCheck() throws Exception {
        DTO data = new DTO();
      
        ObjectMapper mapper = new ObjectMapper();

        String json = mapper.writeValueAsString(data);

        System.out.println("Java2Json: " + json);

        data = mapper.readValue(json, DTO.class);

        System.out.println("Json2Java: " + mapper.writeValueAsString(data));

        MvcResult result = mockMvc.perform(
                MockMvcRequestBuilders.post("/dataListController/getItemCount").contentType(MediaType.APPLICATION_JSON).content(json))
                .andExpect(status().isOk()).andReturn();
        System.out.println(result.getResponse().getContentAsString());
    }
}
