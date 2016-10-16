package net.evecom.gsms.service;

import net.evecom.gsms.entity.DeptEntity;

/**
 * Created by Warren on 2016/9/5.
 */
public interface DeptService {
    DeptEntity getByDeptno(Long deptno);
    
}
