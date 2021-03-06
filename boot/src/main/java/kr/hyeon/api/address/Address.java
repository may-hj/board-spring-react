package kr.hyeon.api.address;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="addresses")
public class Address {
    @Id
    @Column(name = "address_id") private Long addressId;
    @Column(name = "name") private String name;
    @Column(name = "addr") private String addr;
    @Column(name = "rdate") private Date rdate;
}
