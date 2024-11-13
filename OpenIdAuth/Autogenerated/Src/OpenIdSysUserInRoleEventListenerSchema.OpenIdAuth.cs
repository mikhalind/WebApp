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
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,229,85,193,110,26,49,16,61,19,41,255,48,221,94,22,9,45,247,132,32,37,52,77,145,66,19,5,146,75,213,131,89,15,172,219,93,123,101,123,73,105,196,191,119,108,239,110,32,5,33,165,199,74,8,137,241,188,153,247,102,158,141,100,5,154,146,165,8,87,247,147,169,90,216,100,164,228,66,44,43,205,172,80,50,185,43,81,142,249,101,101,179,211,147,151,211,147,78,101,132,92,194,116,109,44,22,231,237,239,87,108,81,40,185,47,174,49,185,150,86,88,129,230,200,113,114,189,66,105,15,101,125,102,169,85,186,174,66,159,143,26,151,196,19,70,57,51,230,12,2,93,162,247,104,80,143,229,131,202,209,151,187,21,68,88,162,62,61,33,204,55,223,106,189,115,16,79,211,12,11,246,149,198,1,23,16,237,84,136,186,223,9,85,86,243,92,164,144,186,70,71,251,192,25,92,49,131,161,209,221,51,69,222,208,232,184,97,58,1,173,130,9,218,76,113,210,112,175,149,197,212,34,111,50,202,38,0,43,161,109,197,114,88,41,193,97,148,97,250,115,196,228,68,113,177,88,59,10,19,44,230,36,37,116,5,179,195,206,199,186,224,219,118,86,76,67,229,206,56,137,221,147,151,220,160,157,173,75,228,35,149,87,133,124,98,121,133,131,155,74,240,97,220,142,134,71,221,243,182,152,38,232,59,139,61,120,232,118,49,199,140,92,40,73,179,27,204,254,162,143,59,73,175,224,21,203,5,103,228,17,194,121,83,4,199,120,22,131,113,216,155,43,51,202,152,92,226,83,147,61,140,107,2,98,1,241,135,182,72,66,243,13,153,175,4,226,93,126,189,122,146,189,122,8,221,102,200,158,14,106,173,244,4,141,97,75,103,44,137,207,112,171,82,42,255,155,205,115,156,90,77,14,127,83,48,121,64,163,42,157,210,169,210,4,235,65,40,215,137,142,185,46,234,65,244,87,117,227,52,216,96,146,203,188,8,62,241,124,18,191,138,168,155,204,84,77,164,158,65,199,102,90,61,123,178,215,191,82,44,29,171,120,91,73,157,183,113,223,155,214,200,40,121,240,242,97,107,251,59,228,47,97,167,223,239,195,192,84,69,193,244,122,248,133,73,158,163,1,12,214,29,75,18,104,221,229,71,167,47,25,244,155,196,22,89,50,205,10,144,116,95,47,34,67,157,73,253,208,15,3,194,47,194,248,148,253,8,140,134,179,12,169,63,34,164,26,23,23,209,236,236,192,107,228,25,93,225,130,162,190,254,165,94,154,8,250,67,16,210,88,38,233,229,76,149,180,76,72,71,215,102,216,244,243,204,129,92,196,118,168,212,207,136,90,209,60,5,199,112,149,239,100,171,56,86,243,31,228,131,90,69,15,246,246,7,108,76,54,167,87,38,217,134,55,184,102,71,7,95,137,250,153,232,6,64,200,222,28,95,205,39,204,241,191,218,76,35,248,125,139,105,209,255,186,151,3,119,108,83,255,13,110,197,41,4,110,143,127,0,45,252,86,96,219,7,0,0 };
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

