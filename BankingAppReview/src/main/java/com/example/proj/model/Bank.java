package com.example.proj.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bank {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String bankname;
    private String acctype;
    private String accholdname;
    
	public Bank() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Bank(Long id, String bankname, String acctype, String accholdname) {
		super();
		this.id = id;
		this.bankname = bankname;
		this.acctype = acctype;
		this.accholdname = accholdname;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getBankname() {
		return bankname;
	}
	public void setBankname(String bankname) {
		this.bankname = bankname;
	}
	public String getAcctype() {
		return acctype;
	}
	public void setAcctype(String acctype) {
		this.acctype = acctype;
	}
	public String getAccholdname() {
		return accholdname;
	}
	public void setAccholdname(String accholdname) {
		this.accholdname = accholdname;
	}
	
    
    
    
    
    // Getters and setters
}