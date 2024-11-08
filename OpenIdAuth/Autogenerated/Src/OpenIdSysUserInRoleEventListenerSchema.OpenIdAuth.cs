namespace BPMSoft.Configuration
{

	using BPMSoft.Common;
	using BPMSoft.Core;
	using BPMSoft.Core.Configuration;
	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;

	#region Class: OpenIdSysUserInRoleEventListenerSchema

	/// <exclude/>
	public class OpenIdSysUserInRoleEventListenerSchema : BPMSoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public OpenIdSysUserInRoleEventListenerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public OpenIdSysUserInRoleEventListenerSchema(OpenIdSysUserInRoleEventListenerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee");
			Name = "OpenIdSysUserInRoleEventListener";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("5daf09f1-167a-4d95-90ab-547ed370e530");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,85,193,110,26,49,16,61,19,41,255,48,221,94,22,9,45,247,132,32,37,52,77,145,66,19,5,146,75,213,131,89,15,172,219,93,123,101,123,73,105,196,191,119,108,239,110,32,5,33,165,199,74,8,137,241,188,153,247,198,207,131,100,5,154,146,165,8,87,247,147,169,90,216,100,164,228,66,44,43,205,172,80,50,185,43,81,142,249,101,101,179,211,147,151,211,147,78,101,132,92,194,116,109,44,22,231,237,239,87,108,81,40,185,47,174,49,185,150,86,88,129,230,200,113,114,189,66,105,15,101,125,102,169,85,186,174,66,159,143,26,151,196,19,70,57,51,230,12,2,93,162,247,104,80,143,229,131,202,209,151,187,21,68,88,162,62,61,33,204,55,223,106,189,115,16,79,211,12,11,246,149,198,1,23,16,237,84,136,186,223,9,85,86,243,92,164,144,186,70,71,251,192,25,92,49,131,161,209,221,51,69,222,208,232,184,97,58,1,173,130,9,218,76,113,210,112,175,149,197,212,34,111,50,202,38,0,43,161,109,197,114,88,41,193,97,148,97,250,115,196,228,68,113,177,88,59,10,19,44,230,36,37,116,5,179,195,206,199,186,224,219,118,86,76,67,229,206,56,137,221,147,151,220,160,157,173,75,228,35,149,87,133,124,98,121,133,131,155,74,240,97,220,142,134,71,221,243,182,152,38,232,59,139,61,120,232,118,49,199,140,92,40,73,179,27,204,254,162,143,59,73,175,224,21,203,5,103,228,17,194,121,83,4,199,120,22,131,113,184,55,87,102,148,49,185,196,167,38,123,24,215,4,196,2,226,15,109,145,132,230,27,50,95,9,196,187,252,122,245,36,123,245,16,186,205,144,61,29,212,90,233,9,26,195,150,206,88,18,159,225,86,165,84,254,55,155,231,56,181,154,28,254,166,96,242,128,70,85,58,165,83,165,9,214,131,80,174,19,29,115,93,212,131,232,175,234,198,105,176,193,36,151,121,17,124,226,249,36,254,42,162,110,50,83,53,145,122,6,29,155,105,245,236,201,94,255,74,177,116,172,226,109,37,117,222,198,125,111,90,35,163,228,193,203,135,173,237,223,144,127,132,157,126,191,15,3,83,21,5,211,235,225,23,38,121,142,6,48,88,119,44,73,160,117,143,31,157,190,100,208,111,18,91,100,201,52,43,64,210,123,189,136,12,117,38,245,67,63,12,8,191,8,227,83,246,35,48,26,206,50,164,254,136,144,106,92,92,68,179,179,3,219,200,51,186,194,5,69,125,253,75,189,52,17,244,135,32,164,177,76,210,230,76,149,180,76,72,71,215,102,216,244,243,204,129,92,196,118,168,212,107,68,173,104,158,130,99,120,202,119,178,85,28,171,249,15,242,65,173,162,7,123,251,3,54,38,155,211,150,73,182,225,13,174,185,163,131,91,162,94,19,221,0,8,217,155,227,87,243,9,115,252,175,110,166,17,252,190,139,105,209,255,122,47,7,222,216,166,254,27,220,138,83,136,54,198,31,45,246,71,116,217,7,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateCantModifyAlmRoleMessageLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateCantModifyAlmRoleMessageLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("0ce50dac-8e62-7139-ffcb-c63dc6a1c41e"),
				Name = "CantModifyAlmRoleMessage",
				CreatedInPackageId = new Guid("5daf09f1-167a-4d95-90ab-547ed370e530"),
				CreatedInSchemaUId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee"),
				ModifiedInSchemaUId = new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("1924c96a-4424-4b42-8958-8df3c4ce8fee"));
		}

		#endregion

	}

	#endregion

}

